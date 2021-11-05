exports.timeConverter = (time) => {
  if (time && time.length > 0) {
    let time_arr = time.split(":");
    let new_time = new Date();
    new_time.setHours(time_arr[0], time_arr[1], 0);
    return new_time;
  }
  return null;
};

exports.getTimeInStatus = (time_log, late_time) => {
  //set status
  if (time_log.getTime() >= late_time.getTime()) {
    return "LATE IN";
  } else {
    return "ON TIME";
  }
};

exports.getTimeOutStatus = (time_log, valid_time_out) => {
  //todo - condition for overtime (COMPUTE YUNG DIFFERENCE KUNG ILANG HOURS)
  //set status
  if (time_log.getTime() >= valid_time_out.getTime()) {
    return "ON TIME";
  } else {
    return "EARLY OUT";
  }
};

exports.getTardiness = (time_in, late_time_in) => {
  //tardy
  if (time_in.getTime() <= late_time_in.getTime()) {
    return true;
  } else {
    return false;
  }
};

exports.getTotalRunningTime = (time_in, time_out) => {
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

exports.getAbsentStatus = (time_in) => {
  if (time_in == null || time_in == "") {
    return "ABSENT";
  } else {
    return null;
  }
};
