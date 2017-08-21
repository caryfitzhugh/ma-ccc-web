import moment from 'moment';
import {uniq} from 'lodash';

const ResourcePublishDate = (resource) => {
  var published_on = null;
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  try {
    if (resource.published_on_start === resource.published_on_end) {
      let pubstart = APIDateToDate(resource.published_on_start);
      published_on = pubstart.format("MMMM Do YYYY");
    } else {

      let pubstart = APIDateToDate(resource.published_on_start);
      let pubend = APIDateToDate(resource.published_on_end);
      // Does subtracting one day from the start, change the month?
      // Does adding one day to the end change the month?
      let first_and_last_month = pubstart.month() !== pubstart.clone().subtract(1,'day').month() &&
        pubend.month() !== pubend.clone().add(1, 'day').month();

      let first_and_last_year = pubstart.year() !== pubstart.clone().subtract(1,'day').year() &&
        pubend.year() !== pubend.clone().add(1, 'day').year();

      if (first_and_last_year) {
        // 2017
        published_on = uniq([pubstart.year(),pubend.year()]).sort().join(" - ");
      } else if (first_and_last_month) {
        // Jun - Aug 2017
        published_on = uniq([monthNames[pubstart.month()], monthNames[pubend.month()]]).join(" - ") + " " + pubstart.year();
      }
      // (MonthStart) (Year Start) - MEnd YearEnd
      else {
        published_on = monthNames[pubstart.month()] + " "
                      + pubstart.year() + ' - ' +
                      + monthNames[pubend.month()] + " "
                      + pubend.year();
      }
    }
  } catch (e) {
    published_on = "";
  }
  return published_on;
}

const APIDateToDate = (api_date) => {
  return moment(api_date, "YYYY-MM-DD");
}

const dateToAPIDate = (date) => {
  return date.getFullYear() + "/" + (date.getMonth()+1) +
    date.getDate();
}


export { ResourcePublishDate ,
          APIDateToDate,
          dateToAPIDate};
