import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class DisplayMain extends React.Component {   
       constructor(props) {
           super(props);
           this.state ={
               updatedRecords: [],
               pagenum : 1,
               page:""
           }
         
         this.handleSubmit=this.handleSubmit.bind(this);
         this.DisplayTable=this.DisplayTable.bind(this);
       }

      
       handleSubmit(){
           alert("getting data from server")
          // get and list few blogs on main page
          var  str="pagenum=1"
          
         
        
        var data;        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
             if (xhr.readyState == 4) {
                  if (!xhr.responseType || xhr.responseType === "text") {
                     data = xhr.responseText;
                      json = JSON.parse(xmlhttp.responseText);
                     alert("Text "+json)
                  } else if (xhr.responseType === "document") {
                             data = xhr.responseXML;
                             alert("document" + data)
                  } else {
                         data = xhr.response;
                         alert("Response" + data)
                  }
                    
              }
        }
         /* var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
              if (xhr.readyState == XMLHttpRequest.DONE) {
                  alert(xhr.responseText);
               }
         };*/
         xhr.open("GET", "blog/post/query?"+str, true);
         xhr.send(null); 

        this.DisplayTable(data)
       
       }

     DisplayTable(data){
         alert("display is called")
         var display=""
        for(var i=0;i<=2;i++) {
            const tv='How to write Blogs and jist on it'
           display= display+$('#table-main-page').append('<tr><td> <blockquote>'+tv + i +'<footer>'+ i + '</footer></blockquote></td></tr>');
            $('#row-id').append('<div class="col-sm-4"><h3>'+ i +'</h3><p>' + tv + '</p></div>');
            display=display+data;
         }

         this.setState({
             page: display
         });
    }


    render(){
    
        return (
            <div>
                 <span> 
                  {this.state.page}
                 </span>
                 <button type="submit"
                      ref="submit"
                      className="btn btn-success" onClick={this.handleSubmit}>
                    Query
                  </button> 
            </div>
        );

    }

}

DisplayMain.PropTypes = {
     url: PropTypes.string.isRequired,
  
}

export default DisplayMain