import $ from "jquery";
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.min";
$('#date-picker-wrapper .input-group.date').datepicker({
  format: "dd_mm_yyyy",
  orientation: "bottom auto",
  daysOfWeekHighlighted: "0",
  autoclose: true,
  todayHighlight: true
});