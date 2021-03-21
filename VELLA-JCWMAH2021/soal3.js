let usersData = [
    {
      no: 1,
      userName: "alee",
      email: "alee@gmail.com",
      role: "admin",
    },
    {
      no: 2,
      userName: "jennie",
      email: "jeniie@gmail.com",
      role: "user",
    },
    {
      no: 3,
      userName: "elsa",
      email: "elsa@gmail.com",
      role: "user",
    },
  ];
  
  function showTable(number) {
    if (number) {
      let listEdit = usersData.map((el) => {
        if (el.no == number) {
          return `
            <tr>
              <td>#</td>
              <td><input type="text" value="${el.userName}" id="editUserName"></td>
              <td><input type="text" value="${el.email}" id="editEmail"></td>
              <td>
                <select id="editRole">
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </td>
              <td><button onclick="save(${el.no})">SAVE</button> <button onclick="cancel()">CANCEL</button></td>
            </tr>
          `;
        } else {
          return `
          <tr>
          <td>${el.no}</td>
          <td>${el.userName}</td>
          <td>${el.email}</td>
          <td>${el.role}</td>
          <td><button onclick="editUser(${el.no})">EDIT</button> <button onclick="deleteUser(${el.no})">DELETE</button></td>
        </tr>
          `;
        }
      });
      document.getElementById("renderTable").innerHTML = listEdit.join("");
    } else {
      let list = usersData.map((el) => {
        return `
          <tr>
            <td>${el.no}</td>
            <td>${el.userName}</td>
            <td>${el.email}</td>
            <td>${el.role}</td>
            <td><button onclick="editUser(${el.no})">EDIT</button> <button onclick="deleteUser(${el.no})">DELETE</button></td>
          </tr>
        `;
      });
  
      document.getElementById("renderTable").innerHTML = list.join("");
    }
  }
  
  function deleteUser(no) {
    usersData = usersData.filter((el) => {
      return el.no !== no;
    });
  
    showTable();
  }
  
  function editUser(no) {
    showTable(no);
  }
  
  function cancel() {
    showTable();
  }
  
  function save(number) {
    let index = usersData.findIndex((el) => el.no == number);
    let userName = document.getElementById("editUserName").value;
    let email = document.getElementById("editEmail").value;
    let role = document.getElementById("editRole").value;
  
    usersData[index] = {
      ...usersData[index],
      userName,
      email,
      role,
    };
  
    showTable();
  }
  
  function addUser(e) {
    e.preventDefault();
  
    let userName = document.getElementById("InputUserName").value;
    let email = document.getElementById("InputEmail").value;
    let role = document.getElementById("InputRole").value;
    let no = usersData.length + 1;
  
    if (!userName) {
      alert("tolong isi user name");
    } else if (!email) {
      alert("tolong isi email");
    } else {
      usersData.push({
        no,
        userName,
        email,
        role,
      });
  
      document.getElementById("InputUserName").value = "";
      document.getElementById("InputEmail").value = "";
  
      showTable();
    }
  }
  
  showTable();
  
  console.log('finished')