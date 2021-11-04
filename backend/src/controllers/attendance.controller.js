const db = require("../models");
const Attendance = db.attendance;


exports.create = async (req, res) => {
  try {

      let attendanceDetails = req.body;

      //scanning time in
      let timeIn = attendanceDetails.time_in.split(":");
      let timeInLog = new Date();
      timeInLog.setHours(timeIn[0], timeIn[1], 0);

      //scanning time out
      let timeOut = attendanceDetails.time_out.split(":");
      let timeOutLog = new Date();
      timeOutLog.setHours(timeOut[0], timeOut[1], 0);

      //Dito ung ano pag seset ng oras ng late sa time in

      //****7:10**** UNG NAKA SET NA LATE
      let late_timeIn = new Date();
      late_timeIn.setHours(7,10,0);

      //Dito ung ano pag seset ng oras ng totoong time out nung employee 
      
      //****4PM**** UNG NAKA SET NA TIMEOUT
      let late_timeOut = new Date();
      late_timeOut.setHours(16,0,0);


      //!!!!!  AUTOMATIC INPUTS.

      //accuracy(PARTIAL)
      attendanceDetails.accuracy = null;


      //tardy
      if(late_timeIn.getTime() <= timeInLog.getTime()){
        attendanceDetails.tardiness = true
      }
      else{
        attendanceDetails.tardiness = false
      }


      //entries(PARTIAL)
      attendanceDetails.entries = null;


      //total running time
      if(attendanceDetails.time_in != null){
        attendanceDetails.total_running_time = (

          (timeOutLog.getTime() - timeInLog.getTime()) / (1000 * 60 * 60) - 1

          );
      }
      else{
        attendanceDetails.total_running_time = null
      }


      //date
      attendanceDetails.date = Date.now();


      //absent
      if(attendanceDetails.time_in == null || attendanceDetails.time_in == ""){
        attendanceDetails.absent = "Absent";
      }
      else{
        attendanceDetails.absent = null;
      }


      //status time in
      if(timeInLog.getTime() >= late_timeIn.getTime()){
        attendanceDetails.status_time_in = "Late In"
      }
      else{
        attendanceDetails.status_time_in = "In Time"
      }

      //status time out
      if(timeOutLog.getTime() >= late_timeOut.getTime()){
        attendanceDetails.status_time_out = "On Time"
      }
      else{
        attendanceDetails.status_time_out = "Early Out"
      }


    const new_attendance = await Attendance.create(attendanceDetails);
    return res.status(200).send(new_attendance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const attendance = await Attendance.findAll({
    include: ["employees", "departments"],
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
