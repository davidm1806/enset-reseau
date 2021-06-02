Vue.component('custom-nav', {
    props: ['title'],
    created: function() {
      this.findGroupByAccount()
    },
    mounted: function() {
        this.getAuthentication();
    },
    data: function() {
        return {
            user: {},
            groups: [],
        }
    },
    methods: {
          getAuthentication : function () {
              this.user = isAuthenticate();
          },
            findGroupByAccount: function () {
                this.getAuthentication();
                if(!this.user)
                    return;
                const selft = this;
                $.ajax({
                    url: `${GROUP_FIND_BY_ACCOUNT__GET+selft.user.id}`,
                    type: 'GET',
                    success: function (data) {
                        selft.groups = data;
                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            }
    },
    template: `<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <a :href="'profile.html?id='+user.id">
                        <img alt="image" class="img-circle" src="img/inconnue/man.png" width="100" />
                    </a>
                    <br/>
                    <br/>
                    <span>
                        <a href="#"><i class="fa fa-file-archive-o"></i><strong class="font-bold"> {{ user?.name }} : {{ user?.sub }} </strong></a>
                    </span>
                </div>
                <div class="logo-element">
                    IN+
                </div>
            </li>
            
            <template v-if="isAdmin(user.roles)">
            
               <!-- <li>
                    <a href="chat_view.html"><i class="fa fa-envelope-o"></i><span>chat</span></a>
                </li>-->
                
                <li>
                    <a href="jq_grid.html"><i class="fa fa-group"></i> <span>Group</span></a>
                    
                </li>
                <li>
                    <a href="#"><i class="fa fa-address-book"></i> <span class="nav-label">Compte </span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse">
                        <li><a href="contacts.html">profile</a></li>
                        <li><a href="users.html">Utilisateur</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="fa fa-file-archive-o"></i> <span class="nav-label">Annonces</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse">
                        <li><a href="form_editors.html">Créer une annonce</a></li>
                        <li><a href="article.html">Voir annonces</a></li>
                    </ul>
                </li>
            </template>
            
            <template v-else>
                
                <template v-if="groups.length > 0">
                    <li v-for="g in groups">
                        <a :href="'chat_view.html?id='+g.id"><i class="fa fa-file-archive-o"></i> <span class="nav-label">{{ g.name }}</span></a>
                       
                    </li>
                </template> 
              
                
                <li v-else>
                    <span class="nav-label">Aucun group trouvé</span>
                   
                </li>
                
            </template>
           
        </ul>

    </div>
</nav>`
})

Vue.component('custom-footer', {
    template: `<div class="footer" >
                    <div class="pull-right">
                        10GB of <strong>250GB</strong> Free.
                    </div>
                    <div>
                        <strong>Copyright</strong> Example Company &copy; 2014-2017
                    </div>
                </div>`
});

Vue.component('custom-small-chat', {
    template: ` <div class="small-chat-box fadeInRight animated">

            <div class="heading" draggable="true">
                <small class="chat-date pull-right">
                    02.19.2015
                </small>
                Small chat
            </div>

            <div class="content">

                <div class="left">
                    <div class="author-name">
                        Monica Jackson <small class="chat-date">
                        10:02 am
                    </small>
                    </div>
                    <div class="chat-message active">
                        Lorem Ipsum is simply dummy text input.
                    </div>

                </div>
                <div class="right">
                    <div class="author-name">
                        Mick Smith
                        <small class="chat-date">
                            11:24 am
                        </small>
                    </div>
                    <div class="chat-message">
                        Lorem Ipsum is simpl.
                    </div>
                </div>
                <div class="left">
                    <div class="author-name">
                        Alice Novak
                        <small class="chat-date">
                            08:45 pm
                        </small>
                    </div>
                    <div class="chat-message active">
                        Check this stock char.
                    </div>
                </div>
                <div class="right">
                    <div class="author-name">
                        Anna Lamson
                        <small class="chat-date">
                            11:24 am
                        </small>
                    </div>
                    <div class="chat-message">
                        The standard chunk of Lorem Ipsum
                    </div>
                </div>
                <div class="left">
                    <div class="author-name">
                        Mick Lane
                        <small class="chat-date">
                            08:45 pm
                        </small>
                    </div>
                    <div class="chat-message active">
                        I belive that. Lorem Ipsum is simply dummy text.
                    </div>
                </div>


            </div>
            <div class="form-chat">
                <div class="input-group input-group-sm"><input type="text" class="form-control"> <span class="input-group-btn"> <button
                        class="btn btn-primary" type="button">Send
                </button> </span></div>
            </div>

        </div>
        <div id="small-chat">

        <span class="badge badge-warning pull-right">5</span>
        <a class="open-small-chat">
            <i class="fa fa-comments"></i>

        </a>
    </div>`
})



Vue.component('custom-top-menu', {
    mounted: function() {
        this.animatedTitle();
    } ,
    methods: {
        logout: function () {
            logout();
        },
        animatedTitle: function () {
            phrase1 = "DEPARTEMENT DE GENIE INFORMATIQUE";
            phrase2 = "";
            rythme = 25;
            pause = 20000;
            longueur = 150;
            pos1 = 1;
            pos2 = longueur;
            timer = setTimeout("textetapee()",rythme);
        }
    },
    template: `<div class="row border-bottom">
            <nav class="navbar navbar-static-top text-center" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
                    
                </div>
                    
                    <span class="text-muted welcome-message" id="welcome-message" style="font-size: 15px; margin-top: 50px; font-weight: bold"></span>
                    <span class="m-r-sm text-muted h6 welcome-message" id="welcome2-message"></span>
            
              
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                    </li>
                   
                    <li>
                        <a href="javascript:void()" @click="logout()">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>

            </nav>
        </div>`
});





function textetapee () {
    var sujet1 = phrase1.substring (0,pos1);
    var sujet2 = phrase2.substring (0,pos1);
    for (var i=1;i<pos2;i++) sujet1 += " " ;
    sujet1 += phrase1.charAt(pos1);
    sujet2 += phrase2.charAt(pos1);
    document.getElementById('welcome-message').innerHTML = sujet1;
    document.getElementById('welcome2-message').innerHTML = sujet2;
    if (pos2 <= 1) {
        pos1++;
        if (phrase1.charAt(pos1) == " ") pos1++ ;
        pos2 = longueur-pos1
    } else {
        if (pos2 >  30) pos2 *= .065 ;
        else pos2--;
    }
    if (pos1 != phrase1.length) timer = setTimeout("textetapee()",rythme);
    else {
        pos1 = 0;
        pos2 = longueur;
        timer = setTimeout("textetapee()",pause);
    }}