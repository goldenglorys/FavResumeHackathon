<template>

    <div data-spy="scroll" data-target="#navbar" data-offset="30">
    
        <div class="nav-menu fixed-top" style="background: #FF512F; background: -webkit-linear-gradient(to right, #DD2476, #FF512F); background: linear-gradient(to right, #DD2476, #FF512F);">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" >
                        <nav class="navbar navbar-dark navbar-expand-lg">
                            <a class="navbar-brand" href="/"><img src="https://favcode54.org/images/favcode54-logo-white2.png" width="25%" class="img-fluid" alt="logo"></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                            <div class="collapse navbar-collapse" id="navbar">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item"> <a class="nav-link active" href="#home">HOME <span class="sr-only">(current)</span></a> </li>
                                    <li class="nav-item"> <a class="nav-link" href="#features">FEATURES</a> </li>
                                    <li class="nav-item"> <a class="nav-link" href="#gallery">GALLERY</a> </li>
                                    <li class="nav-item"> <a class="nav-link" href="#contact">CONTACT</a> </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <header class="bg-gradient" id="home">
            <div class="container mt-5">
                <h1>FavResume Generator</h1>
                <p class="tagline">When its time to apply for that awsome tech job,we got you covered.
                With just few lines of json we get you a professional resume in less than 30 seconds</p>

                <p class="margin-bot">  
                    <a href="http://127.0.0.1:3000/home" class="btn-lg btn-primary ">Generate Resume with JSON</a>
                    <a href="/home" class="btn-lg btn-primary ">Generate Resume UI</a>
                </p>
            </div>
            <div class="img-holder mt-3"><img :src="require('../assets/images/x3.png')" width="40%" alt="phone" ></div>
        </header>

        <div class="client-logos my-5">
            <div class="container text-center">
                <img :src="require('../assets/images/client-logos.png')" alt="client logos" class="img-fluid">
            </div>
        </div>

    </div>

</template>

  

<script>

    export default {

        mounted() {

            console.log('Component mounted.')

        }

    }