import Login from "../pages/Login/index";
import Usuario from "../pages/CadastroUsuario/index";
import Perfil from "../pages/CadastroPerfil/index";
import Recuperar from "../pages/RecuperarSenha/index";
import Evento from "../pages/Evento/index";
import Home from "../pages/Home/index";
import Home2 from "../pages/Home2/index";
import NomeComite from "../pages/NomeComite/index";
import AddComite from "../pages/AddComite/index";
import Voluntario from "../pages/Voluntario/index";
import Pesquisa from "../pages/PesquisaOpiniao/index";
import Comites from "../pages/Comites/index";
import AddEvento from "../pages/AddEvent/index";
import Drawer from "./Drawer";
import Drawer2 from "./Drawer2";
import SideBar from "./SideBar";
import Menu from "../components/drawer/Menu";
import Intro from "../pages/Intro/index";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Routes = createAppContainer(
  createStackNavigator({
    initialRoutes: {
      name: "Intro",
      screen: Intro,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Intro: {
      name: "Intro",
      screen: Intro,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    SideBar: {
      name: "SideBar",
      screen: SideBar,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Drawer: {
      name: "Drawer",
      screen: Drawer,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Drawer2: {
      name: "Drawer2",
      screen: Drawer2,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Voluntario: {
      name: "Voluntario",
      screen: Voluntario,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Pesquisa: {
      name: "Pesquisa",
      screen: Pesquisa,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Comites: {
      name: "Comites",
      screen: Comites,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Evento: {
      name: "Evento",
      screen: Evento,
      navigationOptions: {
        title: null,
        header: null,
      },
    },

    Login: {
      name: "Login",
      screen: Login,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Usuario: {
      name: "Usurio",
      screen: Usuario,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Perfil: {
      name: "Perfil",
      screen: Perfil,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Recuperar: {
      name: "Recuperar",
      screen: Recuperar,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Evento: {
      name: "Evento",
      screen: Evento,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Home: {
      name: "Home",
      screen: Home,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Home2: {
      name: "Home2",
      screen: Home2,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Drawer: {
      name: "Drawer",
      screen: Drawer,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    Menu: {
      name: "Menu",
      screen: Menu,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    NomeComite: {
      name: "NomeComite",
      screen: NomeComite,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    AddComite: {
      name: "AddComite",
      screen: AddComite,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    AddEvento: {
      name: "AddEvento",
      screen: AddEvento,
      navigationOptions: {
        title: null,
        header: null,
      },
    },
    contentComponent: (props) => <SideBar {...props} />,
  })
);
export default Routes;
