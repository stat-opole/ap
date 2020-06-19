Survey
    .StylesManager
    .applyTheme("orange");

var json = {
    "title": "Survey Title&Logo demo",
    "description": "Please take look at the survey title and logo. Test the settings on the right panel ->",
    "logo": "https://surveyjs.io/favicon.ico",
    "logoWidth": 60,
    "logoHeight": 60,
    "questions": [
        {
            "name": "name",
            "type": "text",
            "title": "Please enter your name:",
            "placeHolder": "Jon Snow",
            "isRequired": true
        }, {
            "name": "birthdate",
            "type": "text",
            "inputType": "date",
            "title": "Your birthdate:",
            "isRequired": true
        }, {
            "name": "color",
            "type": "text",
            "inputType": "color",
            "title": "Your favorite color:"
        }, {
            "name": "email",
            "type": "text",
            "inputType": "email",
            "title": "Your e-mail:",
            "placeHolder": "jon.snow@nightwatch.org",
            "isRequired": true,
            "validators": [
                {
                    "type": "email"
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
