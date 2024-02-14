const insert =document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = ` 
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">key</th>
      <th scope="col">keycode</th>
      <th scope="col">Code</th>    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>

  </tbody>
  </table>
`
})