const addBtn = document.querySelector('#add_btn');
const main = document.querySelector('#main');


addBtn.addEventListener('click', function(){
  //  alert("chal");
  addNote();
});


const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">    
    <h3><center> NOTES <center></h3> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;     
              <i class="save fa-solid fa-floppy-disk"></i>
               <i class="trash fa-solid fa-trash-can"></i>
            </div>
           <textarea>${text}</textarea>
           
    `;
      note.querySelector('.trash').addEventListener('click', function(){
          note.remove();
          saveNotes();
      })

      //save
      note.querySelector('.save').addEventListener('click', function(){
          saveNotes();
      })
      //AutoSave
      note.querySelector("textarea").addEventListener('focusout',function(){
          saveNotes();
      })
    main.appendChild(note);
    saveNotes();
}

const saveNotes = () =>{
    const notes = document.querySelectorAll('.note textarea');
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
        data.push(note.value);
    })
   // console.log(data);
   if(data.length === 0){
       localStorage.removeItem("notes");
   }
   else{
    localStorage.setItem("notes",JSON.stringify(data));
   }
  
}
//self calling funtion to load page one note show to the user

(
    function(){
          const lsNotes = JSON.parse( localStorage.getItem("notes"));
        
        if(lsNotes === null){
            addNote()
        } else{
        lsNotes.forEach( 
            (lsNote) => {
            addNote(lsNote);
        }

        )
    }

          if(ls_notes == null  ){
              localStorage.removeItem("notes")
          }
          else{
              addNote();
          }
       
    }
)()
