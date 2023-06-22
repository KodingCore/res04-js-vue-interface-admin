export default {
    data() {
      return {
        home: false,
        users: false,
        usersData: [
            {number: 1, firstName: "Jean", lastName: "Neymar", mail: "jean.neymar@rlb.fr", status: "Actif", buttonStatus: "Désactiver", classBtn: "btn btn-secondary"},
            {number: 2, firstName: "Samuel", lastName: "Ropierd", mail: "samro@hotmail.fr", status: "Inactif", buttonStatus: "Activé", classBtn: "btn btn-primary"},
            {number: 3, firstName: "Julie", lastName: "Monnade", mail: "ju.limo@hotmail.fr", status: "Inactif", buttonStatus: "Activé", classBtn: "btn btn-primary"},
            {number: 4, firstName: "Céline", lastName: "Didion", mail: "almost-diva@musical.io", status: "Actif", buttonStatus: "Désactiver", classBtn: "btn btn-secondary"},
            {number: 5, firstName: "Loic", lastName: "Grenac", mail: "logr@proton.bzh", status: "Actif", buttonStatus: "Désactiver", classBtn: "btn btn-secondary"}
        ]
      }
    },
    setup() {
        const indexOfSlash = window.location.href.lastIndexOf("/");
        const link = window.location.href.substring(indexOfSlash + 1);
      
        if (link === "index.html") {
            return {home:true};
        } else if (link === "users.html") {
            return {users:true};
        }
    },
    methods: {
      
    }
  }
  

  /*

<tr>
    <td>1</td>
    <td>Jean</td>
    <td>Neymar</td>
    <td>jean.neymar@rlb.fr</td>
    <td>Actif</td>
    <td><button class="btn btn-secondary">Désactiver</button></td>
</tr>
<tr>
    <td>2</td>
    <td>Samuel</td>
    <td>Ropierd</td>
    <td>samro@hotmail.fr</td>
    <td>Inactif</td>
    <td><button class="btn btn-primary">Activer</button></td>
</tr>
<tr>
    <td>3</td>
    <td>Julie</td>
    <td>Monnade</td>
    <td>ju.limo@hotmail.fr</td>
    <td>Inactif</td>
    <td><button class="btn btn-primary">Activer</button></td>
</tr>
<tr>
    <td>4</td>
    <td>Céline</td>
    <td>Didion</td>
    <td>almost-diva@musical.io</td>
    <td>Actif</td>
    <td><button class="btn btn-secondary">Désactiver</button></td>
</tr>
<tr>
    <td>5</td>
    <td>Loic</td>
    <td>Grenac'h</td>
    <td>logr@proton.bzh</td>
    <td>Actif</td>
    <td><button class="btn btn-secondary">Désactiver</button></td>
</tr>

  */