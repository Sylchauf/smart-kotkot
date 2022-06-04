import React, { useEffect } from "react";

let webrtc;
let mediaStream;

export const VideoPlayer = ({ url }) => {
  useEffect(() => {
    startPlay();

    document
      .getElementById("videoPlayer")
      .addEventListener("loadeddata", () => {});

    document.getElementById("videoPlayer").addEventListener("error", () => {
      console.log("video_error");
    });

    return () => {
      if (webrtc) {
        webrtc.close();
        mediaStream = null;
        webrtc = null;
      }
    };
  }, []);

  const startPlay = async () => {
    mediaStream = new MediaStream();

    document.getElementById("videoPlayer").srcObject = mediaStream;

    webrtc = new RTCPeerConnection({
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"],
        },
      ],
      sdpSemantics: "unified-plan",
    });
    webrtc.oniceconnectionstatechange = console.log;
    webrtc.oniceconnectionstateerror = console.error;
    webrtc.onicecandidate = console.log;
    webrtc.ondatachannel = console.log;
    webrtc.onconnectionstatechange = console.log;
    webrtc.onnegotiationneeded = handleNegotiationNeeded;
    webrtc.onsignalingstatechange = signalingstatechange;

    webrtc.ontrack = function (event) {
      console.log(event.streams.length + " track is delivered", event.track);
      mediaStream.addTrack(event.track);
    };

    let offer = await webrtc.createOffer({
      offerToReceiveAudio: false,
      offerToReceiveVideo: true,
    });
    await webrtc.setLocalDescription(offer);

    const webrtcSendChannel = webrtc.createDataChannel("rtsptowebSendChannel");
    webrtcSendChannel.onopen = (event) => {
      console.log(`${webrtcSendChannel.label} has opened`);
      webrtcSendChannel.send("ping");
    };
    webrtcSendChannel.onclose = (_event) => {
      console.log(`${webrtcSendChannel.label} has closed`);
      startPlay();
    };
    webrtcSendChannel.onmessage = (event) => console.log(event.data);

    return webrtc;
  };

  async function signalingstatechange() {
    switch (webrtc.signalingState) {
      case "have-local-offer":
        const body = new FormData();
        body.append("data", btoa(webrtc.localDescription.sdp));

        fetch(url, {
          method: "POST",
          body,
        })
          .then((response) => response.text())
          .then((data) => {
            try {
              webrtc.setRemoteDescription(
                new RTCSessionDescription({
                  type: "answer",
                  sdp: atob(data),
                })
              );
            } catch (e) {
              console.warn(e);
            }
          });
        break;

      case "stable":
        /*
         * There is no ongoing exchange of offer and answer underway.
         * This may mean that the RTCPeerConnection object is new, in which case both the localDescription and remoteDescription are null;
         * it may also mean that negotiation is complete and a connection has been established.
         */
        break;

      case "closed":
        /*
         * The RTCPeerConnection has been closed.
         */
        break;

      default:
        console.log(`unhandled signalingState is ${webrtc.signalingState}`);
        break;
    }
  }

  async function handleNegotiationNeeded() {
    let offer = await webrtc.createOffer();

    await webrtc.setLocalDescription(offer);

    const body = new FormData();
    body.append("data", btoa(webrtc.localDescription.sdp));

    fetch(url, {
      method: "POST",
      body,
    })
      .then((response) => response.text())
      .then((data) => {
        try {
          webrtc.setRemoteDescription(
            new RTCSessionDescription({
              type: "answer",
              sdp: atob(data),
            })
          );
        } catch (e) {
          console.warn(e);
        }
      });
  }

  return (
    <video
      id={"videoPlayer"}
      autoPlay={true}
      controls={false}
      playsInline={true}
      muted={true}
      loop={true}
      style={{
        objectFit: "contain",
        width: "100%",
        height: 463,
        background: "black",
      }}
    />
  );
};

export default VideoPlayer;
