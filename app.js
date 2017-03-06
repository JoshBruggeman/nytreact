var React = require("react");
var ReactDOM = require("react-dom");

var headline;

// this is the search function
$('#search').on('click', function() {
	var searchTerm;
	var startYear;
	var endYear;
	var resultsNumber = **INPUT FROM NUMBER FORM**;

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "8b94eaad754b4bbca0e19a51915c6f45",
	  'q': searchTerm,
	  'begin_date': startYear + "0101",
	  'end_date': endYear + "0101"
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result.response.docs.headline);
    headline = result.response.docs.headline;
	  
	  }
	}).fail(function(err) {
	  throw err;
	});
});


var ArticleTitle = React.createClass({
  render: function () {
    return (<h1>{ headline }</h1>);
  }
});


var Article = React.createClass({
  render: function() {
    return (
      <div>
        <ArticleTitle />
        <hr />
        <div>
        </div>

      </div>
    );
  }
});


ReactDOM.render(<Article />,document.getElementById("app"));