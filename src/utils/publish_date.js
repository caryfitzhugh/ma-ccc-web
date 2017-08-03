import moment from 'moment';

const ResourcePublishDate = (resource) => {
  var published_on = null;
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  try {
    if (resource.published_on_start === resource.published_on_end) {
      let pubstart = moment(resource.published_on_start, "YYYY-MM-DD");
      published_on = pubstart.format("MMMM Do YYYY");
    } else {
      let pubstart = moment(resource.published_on_start, "YYYY-MM-DD");
      let pubend = moment(resource.published_on_end, "YYYY-MM-DD");

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

export { ResourcePublishDate };
