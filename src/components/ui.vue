<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
        <v-stepper v-model="count_stepper" vertical>
          <v-stepper-step :complete="count_stepper > 1" step="1">
          Personal Details
          </v-stepper-step>
      
          <v-stepper-content step="1">
            <v-card color="lighten-1" class="mb-12">
            <v-subheader><b>Identity</b></v-subheader>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="firstname"
                  label="Firstname"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="lastname"
                  label="Lastname"
                  required
                  clearable
                ></v-text-field>
              </v-col>

              <v-subheader><b>Contact</b></v-subheader>
              <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="email"
                label="E-mail"
                required
                prepend-icon="email"
                clearable
              ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="phone"
                  label="Phone with country code"
                  required
                  prepend-icon="phone"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="website"
                  label="Website Link"
                  required
                  prepend-icon="language"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="linkedin"
                  label="LinkedIn Link"
                  required
                  prepend-icon="web"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="github"
                  label="Github Link"
                  required
                  prepend-icon="web"
                  clearable
                ></v-text-field>
              </v-col>
            </v-card>
          <v-btn text color="success" @click="firstDetails">Next</v-btn>
        </v-stepper-content>
      
          <v-stepper-step :complete="count_stepper > 2" step="2" colo="success">Your Skills</v-stepper-step>
      
          <v-stepper-content step="2">
            <v-card color="lighten-1" class="mb-12">
              <v-subheader><b>Programming Languages</b></v-subheader>
              <v-col cols="12">
                <v-combobox
                  :items="programming_items"
                  label="Select multiple or create and hit enter"
                  multiple
                  chips
                  required
                  clearable
                  v-model="programmingItems"
                ></v-combobox>
              </v-col>

              <v-subheader><b>Web Frameworks</b></v-subheader>
              <v-col cols="12">
                <v-combobox
                  :items="web_framework_items"
                  label="Select multiple or create and hit enter"
                  multiple
                  chips
                  required
                  clearable
                  v-model="webFrameworksItems"
                ></v-combobox>
              </v-col>

              <v-subheader><b>Databases</b></v-subheader>
              <v-col cols="12">
                <v-combobox
                  :items="databases_items"
                  label="Select multiple or create and hit enter"
                  multiple
                  chips
                  required
                  clearable
                  v-model="databasesItems"
                ></v-combobox>
              </v-col>

              <v-subheader><b>Tools</b></v-subheader>
              <v-col cols="12">
                <v-combobox
                  :items="tools_items"
                  label="Select multiple or create and hit enter"
                  multiple
                  chips
                  required
                  clearable
                  v-model="toolsItems"
                ></v-combobox>
              </v-col>

              <v-subheader><b>Interests</b></v-subheader>
              <v-col cols="12">
                <v-combobox
                  :items="interests_items"
                  label="Select multiple or create and hit enter"
                  multiple
                  chips
                  required
                  clearable
                  v-model="interestItems"
                ></v-combobox>
              </v-col>

            </v-card>
            <v-btn text color="warning" @click="count_stepper = 1">Prev</v-btn>
            <v-btn text color="success" @click="secondDetails">Next</v-btn>
          </v-stepper-content>
      
          <v-stepper-step :complete="count_stepper > 3" step="3">Projects</v-stepper-step>
      
          <v-stepper-content step="3">
            <v-card color="lighten-1" class="mb-12">
              <v-subheader><b>Personal Projects</b></v-subheader>
              <v-row>
              <v-col cols="12" sm="12" md="12">
              <v-data-table
                :headers="personal_projects_headers"
                :items="personal_projects_data"
                class="elevation-1"
              ></v-data-table>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" sm="12" md="3">
                <v-text-field
                  v-model="pName"
                  label="Project Name"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="3">
                <v-text-field
                  v-model="pTagline"
                  label="Project Tagline"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="3">
                <v-text-field
                  v-model="pLink"
                  label="Project Link"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="3">
                <v-text-field
                  v-model="pDescription"
                  label="Project Description"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="9">
                <v-combobox
                  :items="project_tech_used"
                  label="Select multiple or create and hit enter"
                  multiple
                  chips
                  required
                  clearable
                  v-model="pTechUsed"
                ></v-combobox>
              </v-col>
              <v-btn cols="3" rounded="rounded" small="small" color="primary" @click="addPersonalProject" >Add</v-btn>
              </v-row>
              <v-subheader><b>Other Projects</b></v-subheader>
              <v-row>
                <v-row>
                <v-col cols="12" sm="12" md="12">
                <v-data-table
                  :headers="other_projects_headers"
                  :items="other_projects_data"
                  class="elevation-1"
                ></v-data-table>
                </v-col>
                </v-row>
                <v-row>
                <br>
                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    v-model="pHeadline"
                    label="Project Headline"
                    required
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    v-model="pPoints"
                    label="Project Points"
                    required
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-combobox
                    :items="project_tech_used2"
                    label="Select multiple or create and hit enter"
                    multiple
                    chips
                    required
                    clearable
                    v-model="pTechUsed2"
                  ></v-combobox>
                </v-col>
                <v-btn cols="3" rounded="rounded" small="small" color="primary" @click="addOtherProject" >Add</v-btn>
              </v-row>
              </v-row>
            </v-card>
            <v-btn color="warning" @click="count_stepper = 2" text>Prev</v-btn>
            <v-btn text color="success" @click="thirdDetails">Next</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="count_stepper > 4" step="4">Work Experiences</v-stepper-step>
          <v-stepper-content step="4">
            <v-card color="lighten-1" class="mb-12">
              <v-subheader><b>Professional Experiences</b></v-subheader>
              <v-row>
              <v-col cols="12" sm="12" md="12">
              <v-data-table
                :headers="work_headers"
                :items="work_data"
                class="elevation-1"
              ></v-data-table>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model="workTitle"
                  label="Work Title"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model="workOrganisation"
                  label="Organisation"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model="workLocation"
                  label="Location"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model="workFrom"
                  label="Work From"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model="workTo"
                  label="Work To"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model="workDetails"
                  label="Work Details"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="9">
                <v-combobox
                  :items="work_tech_used"
                  label="Select multiple or create and hit enter"
                  multiple
                  chips
                  required
                  clearable
                  v-model="workTechUsed"
                ></v-combobox>
              </v-col>
              <v-btn cols="3" rounded="rounded" small="small" color="primary" @click="addWorkExperience" >Add</v-btn>
              </v-row>
            </v-card>
            <v-btn color="warning" @click="count_stepper = 3" text>Prev</v-btn>
            <v-btn text color="success" @click="fourthDetails">Next</v-btn>
          </v-stepper-content>

          <v-stepper-step step="5" :complete="count_stepper > 5">Your Involvments Details</v-stepper-step>
          <v-stepper-content step="5">
            <v-card color="lighten-1" class="mb-12">
              <v-subheader><b>Extracircullar you're involved in</b></v-subheader>
              <v-row>
              <v-col cols="12" sm="12" md="12">
              <v-data-table
                :headers="involvements_headers"
                :items="involvements_data"
                class="elevation-1"
              ></v-data-table>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="involvement"
                  label="Details"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-btn cols="3" rounded="rounded" small="small" color="primary" @click="addInvolvement" >Add</v-btn>
              </v-row>
            </v-card>
            <v-btn color="warning" @click="count_stepper = 4" text>Prev</v-btn>
            <v-btn text color="success" @click="fifthDetails">Next</v-btn>
          </v-stepper-content>

          <v-stepper-step step="6" :complete="count_stepper > 6">Your Education Details</v-stepper-step>
          <v-stepper-content step="6">
            <v-card color="lighten-1" class="mb-12">
              <v-subheader><b>Education</b></v-subheader>
              <v-row>
              <v-col cols="12" sm="12" md="12">
              <v-data-table
                :headers="education_headers"
                :items="education_data"
                class="elevation-1"
              ></v-data-table>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model="degree"
                  label="Degree"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model="major"
                  label="Major"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model="institution"
                  label="Institution"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  v-model="gradYear"
                  label="Graduation Year"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-btn cols="3" rounded="rounded" small="small" color="primary" @click="addEducation" >Add</v-btn>
              </v-row>
            </v-card>
            <v-btn color="warning" @click="count_stepper = 5" text>Prev</v-btn>
            <v-btn text color="success" @click="sixthDetails">Next</v-btn>
          </v-stepper-content>

          <v-stepper-step step="7" :complete="count_stepper > 7">Research Experiences</v-stepper-step>
          <v-stepper-content step="7">
            <v-card color="lighten-1" class="mb-12">
              <v-subheader><b>Research Experiences</b></v-subheader>
              <v-row>
              <v-col cols="12" sm="12" md="12">
              <v-data-table
                :headers="research_headers"
                :items="research_data"
                class="elevation-1"
              ></v-data-table>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  v-model="researchTitle"
                  label="Research Title"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  v-model="researchOrganisation"
                  label="Research Organisation"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  v-model="researchFrom"
                  label="From"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  v-model="researchTo"
                  label="Research To"
                  required
                  clearable
                ></v-text-field>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="9">
                <v-combobox
                  :items="research_point"
                  label="Research Points"
                  multiple
                  chips
                  required
                  clearable
                  v-model="researchPoint"
                ></v-combobox>
              </v-col>
              <v-btn cols="3" rounded="rounded" small="small" color="primary" @click="addResearch" >Add</v-btn>
              </v-row>
            </v-card>
            <v-btn color="warning" @click="count_stepper = 6" text>Prev</v-btn>
            <v-btn text color="success" @click="finalSubmission">Submit & Generate</v-btn>
          </v-stepper-content>
        </v-stepper>  
        <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
        :absolute="true"
        :fixed="fixed"
      >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="green darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mode_edit</v-icon>
        </v-btn>
      </template>
      <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          dark
          small
          color="yellow"
          @click="getSample"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon>get_app</v-icon>
        </v-btn>
      </template>
      <span>Generate Samaple</span>
      </v-tooltip>
    </v-speed-dial> 
      </v-container>
    </v-app>
    </div>
</template>

<script>

  //import 'showdown'
  //const converter = new showdown.Converter()
  const baseURL = 'https://favresume.herokuapp.com/generate' 

  export default {
    data () {
      return {

        jsonsample : ` {
              "firstname": "Favour",
              "lastname": "Ori",
              "contact": {
                  "email": "favourdemo@gmail.com",
                  "phone": "(870) 949-0000",
                  "website": "www.favourori.github.io",
                  "linkedin": "linkedin.com/in/favourori/",
                  "github": "github.com/orifavour"
              },
              "skills": {
                  "details": [
                      {
                          "type": "Programming Languages",
                          "items": [
                              "Java",
                              "Swift",
                              "Python",
                              "Javascript",
                              "PHP",
                              "Ruby",
                              "Rails"
                          ]
                      },
                      {
                          "type": "Web Frameworks",
                          "items": [
                              "Bootstrap",
                              "Materialize",
                              "Rails"
                          ]
                      },
                      {
                          "type": "Databases",
                          "items": [
                              "MySQL",
                              "SQLite"
                          ]
                      },
                      {
                          "type": "Tools",
                          "items": [
                              "Git",
                              "Sketch",
                              "Github",
                              "Craft by Invision",
                              "Andriod Studio",
                              "Xcode"
                          ]
                      },
                      {
                          "type": "Interests",
                          "items": [
                              "Software Development",
                              "Web Development",
                              "Machine Learning",
                              "Internet of Things"
                          ]
                      }
                  ]
              },
              "github_projects": {
                  "items": [
                      {
                          "project_name": "Bethel Church (App Backend)",
                          "tagline": "[iOS App Admin](https://github.com/orifavour/BethelChurchiOSAppBackend)",
                          "description": [
                              "Desktop App (developed in Java) for managing & controlling the content of Bethel's Mobile App"
                          ],
                          "technology_used": {
                              "tools": [
                                  "Java",
                                  "PHP",
                                  "MySQL"
                              ]
                          }
                      },
                      {
                          "project_name": "SAU Honors College",
                          "tagline": "[iOS App ](https://github.com/orifavour/iOSHonorsCollege)",
                          "description": [
                              "iOS App designed for SAU Honors College  to improve the mobile experience of students, faculty, and friends of the college."
                          ],
                          "technology_used": {
                              "tools": [
                                  "Swift",
                                  "Xcode"
                              ]
                          }
                      }
                  ]
              },
              "other_projects": {
                  "items": [
                      {
                          "headline": "iOS App – Bethel Church, Magnolia",
                          "points": [
                              "Designed an iOS app for Bethel Church, to reduce printing of bulletins, and to let members have direct access to podcasts, upcoming events etc."
                          ],
                          "technology_used": {
                              "tools": [
                                  "Swift",
                                  "MySQL",
                                  "PHP"
                              ]
                          }
                      },
                      {
                          "headline": "Course Selector – Computer Science Dept. SAU",
                          "points": [
                              "Web App for seamless course selection and registration"
                          ],
                          "technology_used": {
                              "tools": [
                                  "HTML5",
                                  "CSS3",
                                  "PHP",
                                  "MySQL"
                              ]
                          }
                      }
                  ]
              },
              "work_experience": {
                  "items": [
                      {
                          "title": "Software Developer",
                          "organisation": "Southern Arkansas University",
                          "location": "Magnolia, AR",
                          "from": "January 2017",
                          "to": "Present",
                          "details": [
                              "Working closely with my professors on various researches & projects"
                          ],
                          "technology_used": {
                              "tools": [
                                  "Xcode",
                                  "Swift",
                                  "Java",
                                  "HTML5",
                                  "CSS3",
                                  "PHP"
                              ]
                          }
                      }
                  ]
              },
              "involvement": {
                  "organizations": [
                      "Volunteer, Magnolia Blossom, OCT 2016"
                  ]
              },
              "education": {
                  "schools": [
                      {
                          "degree": "Bachelor of Science",
                          "major": "Computer Science",
                          "institution": "Southern Arkansas University",
                          "graduation_year": 2020
                      }
                  ]
              },
              "research_experience": {
                  "items": [
                      {
                          "title": "Web Hacking",
                          "organisation": "National Collegiate Honors Council",
                          "from": "February 2017",
                          "to": "April 2017",
                          "points": [
                              "Implemented encryption methods (MD5 and SHA-1)to secure a previously unsecure Web App"
                          ]
                      }
                  ]
              }
          }
      `,

        count_stepper: 1,
        payload: null,
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        website: null,
        linkedin: null,
        github: null,
        programmingItems: null,
        webFrameworksItems: null,
        databasesItems: null,
        toolsItems: null,
        interestItems: null,
        pName: null,
        pTagline: null,
        pLink: null,
        pDescription: null,
        pTechUsed: null,
        pHeadline: null,
        pPoints: null,
        pTechUsed2: null,
        workTitle: null,
        workOrganisation: null,
        workLocation: null,
        workFrom: null,
        workTo: null,
        workDetails: null,
        workTechUsed: null,
        involvement: null,
        degree: null,
        major: null,
        institution: null,
        gradYear: null,
        researchTitle: null,
        researchOrganisation: null,
        researchFrom: null,
        researchTo: null,
        researchPoint: null,

        direction: 'top',
        fab: false,
        fling: false,
        hover: true,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition',
        fixed: true,
        rounded:true,
        small:true,

        select: [],
        programming_items: [
          'Java',
          'Swift',
          'Python',
          'Javascript',
          'PHP',
          'Ruby',
          'Objective-C'
        ],
        web_framework_items: [
          'Bootstarp',
          'Materialize',
          'Ruby on Rails'
        ],
        databases_items: [
          'MySQL',
          'SQLite'
        ],
        tools_items: [
          'Git',
          'Sketch',
          'Github',
          'Craft by Invision',
          'Andriod Studio',
          'Xcode'
        ],
        interests_items: [
          'Software Development',
          'Web Deveopment',
          'Machine Learning',
          'Internet of Things'
        ],
        project_tech_used: [
          "Java",
          "PHP",
          "MySQL",
          "Swift",
          "Xcode"
        ],
        project_tech_used2: [ ],
        work_tech_used: [ ],
        research_point: [ ],
        personal_projects_headers: [
          { text: 'Project Name', value: 'project_name' },
          { text: 'Tagline', value: 'tagline' },
          { text: 'Description', value: 'description' },
          { text: 'Technology Used', value: 'technology_used.tools' },
        ],
        other_projects_headers: [
          { text: 'Project Headline', value: 'headline' },
          { text: 'Project Points', value: 'points' },
          { text: 'Technology Used', value: 'technology_used.tools' },
        ],
        work_headers: [
          { text: 'Work Title', value: 'title' },
          { text: 'Organisation', value: 'organisation' },
          { text: 'Location', value: 'location' },
          { text: 'From', value: 'from' },
          { text: 'To', value: 'to' },
          { text: 'Details', value: 'details' },
          { text: 'Technology Used', value: 'technology_used.tools' },
        ],
        involvements_headers: [
          { text: 'Involvement Details', value: 'organizations' },
        ],
        education_headers: [
          { text: 'Degree', value: 'degree' },
          { text: 'Major', value: 'major' },
          { text: 'Institution', value: 'institution' },
          { text: 'Graduation Year', value: 'graduation_year' },
        ],
        research_headers: [
          { text: 'Research Title', value: 'title' },
          { text: 'Research Organisation', value: 'organisation' },
          { text: 'From', value: 'from' },
          { text: 'To', value: 'to' },
          { text: 'Reseach Point', value: 'points' },
        ],
        personal_projects_data: [ ],
        other_projects_data: [ ],
        work_data: [ ],
        involvements_data: [
           {
              "organizations": [ ]
           }
        ],
        education_data: [ ],
        research_data: [ ],
      }
    },

    methods: {

      getSample() { 
        let json = JSON.parse(this.jsonsample)
        const options = {
                method: "POST",
                body: JSON.stringify(json),
                headers: new Headers({
                'Accept': 'application/json',
                    "Content-Type": "application/json"
                })
            };
        fetch(baseURL, options)
          .then((response) => response.json())
          .then((response) => {
            window.document.location.href = `https://favresume.herokuapp.com/${response.filename}`
          })
          .catch((err) => console.log(err));
      },

      addPersonalProject () {
         let obj = {
            "project_name": this.pName,
            "tagline": `[${this.pTagline}(${this.pLink})]`,
            "description": [ this.pDescription ],
            "technology_used": {
              "tools": this.pTechUsed
            }
        }
        this.personal_projects_data = [ ...this.personal_projects_data, obj ]
      },

      addOtherProject () {
        let obj = {
          "headline": this.pHeadline,
          "points": [ this.pPoints ],
          "technology_used": {
            "tools": this.pTechUsed2
          }
        }
        this.other_projects_data = [ ...this.other_projects_data, obj ]
      },

      addWorkExperience () {
        let obj = {
          "title": this.workTitle,
          "organisation": this.workOrganisation,
          "location": this.workLocation,
          "from": this.workFrom,
          "to": this.workTo,
          "details": [ this.workDetails ],
          "technology_used": {
            "tools": this.workTechUsed
          }
        }
        this.work_data = [ ...this.work_data, obj ]
      },

      addInvolvement () {
        this.involvements_data[0].organizations.push(this.involvement)
      },

      addEducation () {
        let obj = {
          "degree": this.degree,
          "major": this.major,
          "institution": this.institution,
          "graduation_year": this.gradYear
        }
        this.education_data = [ ...this.education_data, obj ]
      },

      addResearch () {
        let obj = {
          "title": this.researchTitle,
          "organisation": this.researchOrganisation,
          "from": this.researchFrom,
          "to": this.researchTo,
          "points": [ this.researchPoint ]
        }
        this.research_data = [ ...this.research_data, obj ]
      },


      firstDetails () {
        this.count_stepper = 2;
      },

      secondDetails () {
        this.count_stepper = 3
      },
      thirdDetails () {
        this.count_stepper = 4
      },
      fourthDetails () {
        this.count_stepper = 5
      },
      fifthDetails () {
        this.count_stepper = 6
      },
      sixthDetails () {
        this.count_stepper = 7
      },

      finalSubmission () {

      },

      thirdDetails2 () {
        let parsed = JSON.parse(this.jsonsample)
        console.log(JSON.parse(this.jsonsample))

        parsed.firstname = this.firstname
        parsed.lastname = this.lastname
        parsed.contact.email = this.email
        parsed.contact.phone = this.phone
        parsed.contact.website = this.website
        parsed.contact.linkedin = this.linkedin
        parsed.contact.github = this.github
        parsed.skills.details = [
          {
            "type": "Programming Languages",
            "items": this.programmingItems
          },
          {
            "type": "Web Frameworks",
            "items": this.webFrameworksItems
          },
          {
            "type": "Databases",
            "items": this.databasesItems
          },
          {
            "type": "Tools",
            "items": this.toolsItems
          },
          {
            "type": "Interestss",
            "items": this.interestItems
          },
        ],
        parsed.github_projects.items = this.personal_projects_data
        parsed.other_projects.items = this.other_projects_data
        this.jsonsample = JSON.stringify(parsed)
        console.log(parsed)
      }
    },


    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },

     mounted () {
     //let parsed = JSON.parse(this.jsonsample)
     //console.log(parsed)
     //console.log(parsed.skills.details)
    }

  }
</script>