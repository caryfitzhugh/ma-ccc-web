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

      // (Month) (Year)
      if (pubstart.month() === pubend.month() &&
          pubstart.year() === pubend.year()) {
        published_on = monthNames[pubstart.month()] + " " + pubstart.year();
      }
      // (MonthStart) - (MonthEnd) Year
      else if (pubstart.year() === pubend.year()) {
        published_on = monthNames[pubstart.month()] + " - "
                      + monthNames[pubend.month()] + " "
                      + pubstart.year();
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
