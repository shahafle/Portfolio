'use strict'

function getDateFromTimestamp(timestamp) {

   var date = new Date(timestamp);
   return date.toDateString();
}