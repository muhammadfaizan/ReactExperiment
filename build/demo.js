/**
 * Created by VD on 12/28/2015.
 */
var Demo = React.createClass({displayName: "Demo",
    render: function(){
        var radioOption= [
            {value: 'newspaper', label:'Newspaper'},
            {value: 'radio', label:'Radio'},
            {value: 'search', label:'Seach Engine'},
            {value: 'social', label:'Social Media'},
        ]
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("h1", null, "React.js Radio Group Demo"), 
                React.createElement("form", null, 
                React.createElement("p", {className: "h3"}, "How did you hear about us?"), 
                    React.createElement(RadioOptionGroup, {name: "referrer", 
                                      other: true, 
                                      options: radioOption}
                    ), 


                React.createElement("p", null, 
                React.createElement("input", {type: "submit"})
                )

                )
            )
        )
    }
})