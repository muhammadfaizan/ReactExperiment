/**
 * Created by VD on 12/28/2015.
 */
var RadioOtherOption = React.createClass({displayName: "RadioOtherOption",
    getInitialState: function() {
        return {
            checked:false
        };
    },
    onChange: function(evt){
        var input = evt.target;
        this.setState({
            checked: input.checked
        });
    },
    render: function(){
        return (
            React.createElement("p", {className: "form-group radio"}, 
                React.createElement("label", null, 
                    React.createElement("input", {type: "radio", onChange: this.onChange, name: this.props.name, 
                           value: "other"}), 
                    "Other"
                ), 
                this.props.selection == 'other' && (
                    React.createElement("label", {className: "form-inline"}, 
                        "Please specify:", 
                        React.createElement("input", {type: "text", name: "referrer_other"})
                    )
                )

            )
        )
    }
})