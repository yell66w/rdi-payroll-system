const res = require("express/lib/response");
const db = require("../models");
const Attendance = db.attendance;

const timeConverter = (time) => {
  if (time) {
    let time_arr = time.split(":");
    let new_time = new Date();
    new_time.setHours(time_arr[0], time_arr[1], 0);
    return new_time;
  }
  return res.status(400).send("Something went wrong.");
};

const getAttendanceStatus = (time_log, late_time, category) => {
  //scanning time in
  let new_time_log = timeConverter(time_log);
  let new_late_time = timeConverter(late_time);

  //todo - condition for overtime
  //set status
  if (new_time_log.getTime() >= new_late_time.getTime()) {
    switch (category) {
      case "TIME_IN":
        return "LATE IN";
      case "TIME_OUT":
        return "ON TIME";
      default:
        break;
    }
  } else {
    switch (category) {
      case "TIME_IN":
        return "ON TIME";
      case "TIME_OUT":
        return "EARLY OUT";
      default:
        break;
    }
  }
};

const getTardiness = (time_in, late_time_in) => {
  //tardy
  let new_time_in = timeConverter(time_in);
  let new_late_time_in = timeConverter(late_time_in);
  if (new_late_time_in.getTime() <= new_time_in.getTime()) {
    return true;
  } else {
    return false;
  }
};

const getTotalRunningTime = (time_in, time_out) => {
  //total running time
  if (time_in != null && time_out !== null) {
    let new_time_in = timeConverter(time_in);
    let new_time_out = timeConverter(time_out);
    return (
      (new_time_out.getTime() - new_time_in.getTime()) / (1000 * 60 * 60) - 1
    );
  } else {
    return null;
  }
};

const getAbsentStatus = (time_in) => {
  if (time_in == null || time_in == "") {
    return "ABSENT";
  } else {
    return null;
  }
};

exports.create = async (req, res) => {
  try {
    let attendance_details = req.body;

    let time_in = attendance_details.time_in;
    let time_out = attendance_details.time_out;
    attendance_details.status_time_in = getAttendanceStatus(
      time_in,
      "7:10",
      "TIME_IN"
    );
    attendance_details.status_time_out = getAttendanceStatus(
      time_out,
      "16:00",
      "TIME_OUT"
    );
    attendance_details.tardiness = getTardiness(time_in, "7:10");
    attendance_details.accuracy = null;
    attendance_details.entries = null;
    attendance_details.total_running_time = getTotalRunningTime(
      time_in,
      time_out
    );
    attendance_details.date = Date.now();
    attendance_details.absent = getAbsentStatus(time_in);
    const new_attendance = await Attendance.create(attendance_details);
    return res.status(200).send(new_attendance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const attendance = await Attendance.findAll({
    include: ["employee"],
  });
  return res.status(200).send(attendance);
};

exports.findOne = async (req, res) => {
  const attendance = await Attendance.findByPk(req.params.id);
  return res.status(200).send(attendance);
};

exports.update = async (req, res) => {
  try {
    await Attendance.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Attendance updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Attendance.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Attendance deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
