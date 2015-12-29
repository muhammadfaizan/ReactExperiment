/**
 * Created by VD on 12/28/2015.
 */
var RadioOtherOption = React.createClass({
    /*getInitialState: function() {
        return {
            checked:false
        };
    },*/
    propTypes: {
        selection: React.PropTypes.bool
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
                    <input type="radio"
                           onChange={this.props.onCheck}
                           name={this.props.name}
                           checked={this.props.checked}
                           value={this.props.value}/>
                    Other
                </label>
                {this.props.checked && (
                    <label className="form-inline" >
                        Please specify:
                        <input type="text" name="referrer_other"/>
                    </label>
                )}

            </p>
        )
    }
})