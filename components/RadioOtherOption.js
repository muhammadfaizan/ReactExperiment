/**
 * Created by VD on 12/28/2015.
 */
var RadioOtherOption = React.createClass({
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
            <p className="form-group radio">
                <label>
                    <input type="radio" onChange={this.onChange} name={this.props.name}
                           value="other"/>
                    Other
                </label>
                {this.props.selection == 'other' && (
                    <label className="form-inline" >
                        Please specify:
                        <input type="text" name="referrer_other"/>
                    </label>
                )}

            </p>
        )
    }
})