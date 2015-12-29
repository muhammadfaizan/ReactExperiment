/**
 * Created by VD on 12/29/2015.
 */
var radioOptions = Hoverboard({
    init: function(state, options) {
        return options;
    },
    check: function(state, value) {
        console.log(value);
        console.table(state);
        return state.map(function(option){
            return {
                value: option.value,
                label: option.label,
                checked: value === option.value
            };
        })
    }
})
// this array will actually be the state
radioOptions.init([
    {value: 'newspaper', label:'Newspaper', checked: false},
    {value: 'radio', label:'Radio', checked: false},
    {value: 'search', label:'Seach Engine', checked: false},
    {value: 'social', label:'Social Media', checked: false},
    {value: 'other', label:'Other', checked: false}

])