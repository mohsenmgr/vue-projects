<template>
    <div id="bcontent">    
        <main>
                <div class="d-flex" id="wrapper">
                <!-- Sidebar-->
                <div class="border-end bg-white" id="sidebar-wrapper">
                    <div class="list-group list-group-flush">
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Vedi la dieta</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Compila il diario</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Aggiungi un peso</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Monitora i progressi</a>
                    </div>
                </div>
                <!-- Page content wrapper-->
                <div id="page-content-wrapper">
                    <!-- Top navigation-->
                    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div class="container-fluid">
                            
                            <button @click="toggleSideBar()" class="navbar-toggler" id="sidebarToggle" type="button"  aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#!">Action</a>
                                            <a class="dropdown-item" href="#!">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#!">Something else here</a>
                                        </div>
                                       
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </nav>
                    <!-- Page content-->
                    <div class="container-fluid">
                        <Alert :msg="'Welcome User'" />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Alert from './alert.vue'

    export default {
        name: 'bcontent',
        props: {
             
        },
        data() {
            return {
                sideBarShown: Boolean
            }
        },
        methods: {
           toggleSideBar() {
                this.sideBarShown = !this.sideBarShown;
                let sitebody = document.body;
                this.sideBarShown ? sitebody.classList.add("sb-sidenav-toggled") : sitebody.classList.remove("sb-sidenav-toggled");
                }           
        },
        components: {
            Alert
        }
    }
</script>

<style scoped>
      @import '../assets/css/styles.css';
</style>