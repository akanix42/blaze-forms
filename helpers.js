import { Template } from 'meteor/nathantreid:templating-components'

Template.registerHelper('iif', function iif(value, truthyResult, falseyResult) {
  if (arguments.length === 3)
    falseyResult = null;
  return value ? truthyResult : falseyResult;
});

Template.registerHelper('iunless', function iunless(value, truthyResult, falseyResult) {
  if (arguments.length === 3)
    falseyResult = null;
  return value ? falseyResult : truthyResult;
});
