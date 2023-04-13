function Book(title,author,isbn)
{
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
function UI()
{
   
}
UI.prototype.addBookTolist=function(book)
{
    const list=document.getElementById('book-list');
    const row=document.createElement('tr');
    row.innerHTML=`<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x<a></td>`;
    list.appendChild(row);
}
UI.prototype.deletebook=function(target)
{
    if(target.className==='delete')
    {
        target.parentElement.parentElement.remove();
    }
}
UI.prototype.clearfields=function(book)
{
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}
UI.prototype.alertmessage=function(message,className)
{
    const div=document.createElement('div');
    div.className=`alert ${className}`;
    const x=document.createTextNode(message);
    div.appendChild(x);
    div.style.borderRadius='3px';
    div.style.textAlign='center';
    const container=document.querySelector('.container');
    const form=document.querySelector('#book-form');
    container.insertBefore(div,form);
     setTimeout(function(){
        document.querySelector('.alert').remove();
     },3000);
}
document.getElementById('book-form').addEventListener('submit',function(e){
const title=document.getElementById('title').value,author=document.getElementById('author').value,
isbn=document.getElementById('isbn').value;
console.log(title,author,isbn);
const book=new Book(title,author,isbn);
const ui=new UI();
if(title===''||author===''||isbn==='')
{
   ui.alertmessage('please fill all the elements','error');
}
else
{
    ui.addBookTolist(book);
    ui.alertmessage('Book Added !','success');
    ui.clearfields(book);
}

e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',function(e){
    const ui=new UI();
    ui.deletebook(e.target);
    ui.alertmessage('Book removed!','success');
  e.preventDefault();
});