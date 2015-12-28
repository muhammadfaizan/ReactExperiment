/**
 * Created by VD on 12/28/2015.
 */
 function Demo (){
        var radioOption= [
            {value: 'newspaper', label:'Newspaper'},
            {value: 'radio', label:'Radio'},
            {value: 'search', label:'Seach Engine'},
            {value: 'social', label:'Social Media'},
        ]
        return (
            <div className="container">
                <h1>React.js Radio Group Demo</h1>
                <form>
                <p className="h3">How did you hear about us?</p>
                    <RadioOptionGroup name="referrer"
                                      other={true}
                                      options={radioOption}
                    />


                <p>
                <input type="submit"/>
                </p>

                </form>
            </div>
        )
    }