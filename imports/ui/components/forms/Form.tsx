import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import { AutoForm } from "uniforms-mui";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import useMobile from "../../hooks/useMobile";

interface Props {
  id?: string;
  title: React.ReactElement | string;
  onClose: () => void;
  getItems: () => any;
  getItem: (string) => any;
  schema: SimpleSchema2Bridge;
  forceValue?: Record<string, any>;
}

const Form: React.FC<Props> = ({
  id,
  schema,
  title,
  getItems,
  getItem,
  onClose,
  forceValue = {},
}) => {
  const { isMobile, isLandscape } = useMobile();
  const formRef = useRef(null);

  const { add, update } = getItems();
  const { data } = getItem(id);

  const errorMessage = (
    <FormattedMessage
      id={"Forms.error"}
      defaultMessage={"Something happend. Try again later"}
    />
  );

  const handleAdd = (values) => {
    add({ ...values, ...forceValue })
      .then(() => {
        toast.success(
          <FormattedMessage
            id={"Forms.success"}
            defaultMessage={"Successfully added"}
          />
        );
        onClose();
      })
      .catch(() => {
        toast.error(errorMessage);
      });
  };

  const handleEdit = (values) => {
    update({ ...values, ...forceValue })
      .then(() => {
        toast.success(
          <FormattedMessage
            id={"Forms.success"}
            defaultMessage={"Successfully added"}
          />
        );
        onClose();
      })
      .catch(() => {
        toast.error(errorMessage);
      });
  };

  const _schema = new SimpleSchema2Bridge(
    schema.schema.omit(...Object.keys(forceValue))
  );

  return (
    <Dialog
      open={true}
      onClose={() => onClose()}
      fullWidth
      fullScreen={isMobile || isLandscape}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <AutoForm
          ref={formRef}
          schema={_schema}
          onSubmit={!data ? handleAdd : handleEdit}
          model={{ ...data, ...forceValue } ?? forceValue}
          submitField={() => null}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>
          <FormattedMessage id={"Actions.Close"} defaultMessage={"Close"} />
        </Button>
        <Button onClick={() => formRef.current && formRef.current.submit()}>
          {data?._id ? (
            <FormattedMessage id={"Actions.Edit"} defaultMessage={"Edit"} />
          ) : (
            <FormattedMessage id={"Actions.Add"} defaultMessage={"Add"} />
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;
