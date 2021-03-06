// Initialize the client
var client = require('smartsheet');
var smartsheet = client.createClient({
  accessToken: '5ffm3yu5wlue8nf0wgj363bcpq',
  logLevel: 'info'
});

// The `smartsheet` variable now contains access to all of the APIs

// Set queryParameters for `include` and pagination
var options = {
  queryParameters: {
    include: "attachments",
    includeAll: true
  }
};

// List all sheets
smartsheet.sheets.listSheets(options)
  .then(function (result) {
    var sheetId = result.data[0].id;                // Choose the first sheet

    // Load one sheet
    smartsheet.sheets.getSheet({id: sheetId})
      .then(function(sheetInfo) {
        console.log(sheetInfo);
      })
      .catch(function(error) {
        console.log(error);
      });
  })
  .catch(function(error) {
    console.log(error);
  });