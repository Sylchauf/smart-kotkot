import useTasks, { Task } from "/imports/ui/hooks/useTasks";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import {
  Calendar,
  momentLocalizer,
  Event as RBCEvent,
} from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FormattedMessage, useIntl } from "react-intl";
import { toast } from "react-toastify";
import HomeCard from "../components/HomeCard";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const INITIAL_TASK: Omit<Task, "_id"> = {
  title: "",
  status: "pending",
  priority: 5,
};

const CalendarPage = () => {
  const [displayDragItemInCell, setDisplayDragItemInCell] = useState(true);
  const [draggedEvent, setDraggedEvent] = useState<Task | undefined>();
  const [openAddModal, setOpenAddModal] = useState(false);
  const [newTask, setNewTask] = useState<Omit<Task, "_id">>(INITIAL_TASK);
  const { formatMessage } = useIntl();
  const { list, isLoading, addTasks, deleteTasks, updateTask } = useTasks();

  const onEventUpdate = ({
    start,
    end,
    event,
  }: {
    start: Date;
    end: Date;
    event: RBCEvent;
  }) =>
    updateTask({
      ...event.resource,
      startDate: start,
      endDate: end,
    });

  const adaptTaskToEvent = (task: Task): RBCEvent => ({
    resource: task,
    start: task.startDate,
    end: task.endDate,
    title: task.title,
    allDay: true,
  });

  const handleDragStart = (task: Task) => setDraggedEvent(task);
  const dragFromOutsideItem = () => draggedEvent;
  const handleDisplayDragItemInCell = () =>
    setDisplayDragItemInCell((prev) => !prev);

  const customOnDragOverFromOutside = (dragEvent) => {
    dragEvent.preventDefault();
  };

  const onDropFromOutside = ({ start, end, allDay: isAllDay }) => {
    updateTask({
      ...draggedEvent,
      startDate: start,
      endDate: end,
    });

    setDraggedEvent(null);
  };

  const onClickAdd = async () => {
    return addTasks(newTask!)
      .then(() => {
        setOpenAddModal(false);
        toast.success("Task added");
      })
      .catch(() => {
        console.log("error");
        toast.error("Error while adding task");
      });
  };

  const onClickCancel = () => {
    setOpenAddModal(false);
    setNewTask(INITIAL_TASK);
  };

  return (
    <div className={"flex gap-4 w-full"}>
      <div className={"w-1/4"}>
        <HomeCard
          title={
            <FormattedMessage id={"Calendar.Tasks"} defaultMessage={"Tasks"} />
          }
          content={
            <div>
              {list.map((task) => (
                <div
                  draggable="true"
                  onDragStart={() => handleDragStart(task)}
                  className={"flex gap-2 items-center"}
                  key={task._id}
                >
                  <div className={"bg-cyan-700 rounded p-2"}>{task.title}</div>
                  <DeleteIcon onClick={() => deleteTasks(task._id)} />
                </div>
              ))}
            </div>
          }
          actions={
            <Tooltip
              key={"add"}
              title={
                <FormattedMessage
                  id={"Calendar.Add"}
                  defaultMessage={"Add a new task"}
                />
              }
            >
              <IconButton size={"small"} onClick={() => setOpenAddModal(true)}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          }
        />

        <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)}>
          <DialogTitle>Add a task</DialogTitle>

          <DialogContent>
            <br />
            <TextField
              label={formatMessage({
                id: "Calendar.Task.Title",
                defaultMessage: "Title",
              })}
              variant="outlined"
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              fullWidth
            />
          </DialogContent>

          <DialogActions>
            <div className={"flex gap-4"}>
              <Button color={"secondary"} onClick={() => onClickCancel()}>
                Cancel
              </Button>
              <Button onClick={() => onClickAdd()}>Add</Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>

      <div className={"w-3/4"}>
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          dragFromOutsideItem={
            displayDragItemInCell ? dragFromOutsideItem : null
          }
          onDropFromOutside={onDropFromOutside}
          onDragOverFromOutside={customOnDragOverFromOutside}
          events={list.filter((task) => !!task.startDate).map(adaptTaskToEvent)}
          localizer={localizer}
          onEventDrop={onEventUpdate}
          onEventResize={onEventUpdate}
          resizable
          selectable
          style={{ height: "80vh" }}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
