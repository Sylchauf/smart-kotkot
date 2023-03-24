const EVENT_TYPE = {
  COMMENT: "comment",
  SEMI: "semi",
  PLANT: "plant",
  WATERING: "watering",
  END: "end",
};

export const EVENT_TYPE_TRANSLATED = {
  [EVENT_TYPE.COMMENT]: {
    fr: "Commentaire",
  },
  [EVENT_TYPE.SEMI]: {
    fr: "Semi",
  },
  [EVENT_TYPE.PLANT]: {
    fr: "Plantation",
  },
  [EVENT_TYPE.WATERING]: {
    fr: "Arrosage",
  },
  [EVENT_TYPE.END]: {
    fr: "Fin de culture",
  },
};

export default EVENT_TYPE;
