<template>
    <div class="container">
        <form v-show="!formSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <label for="name" class="col-xs-12">
                        <span class="col-xs-4">Name:</span>
                        <div class="col-xs-8">
                            <input type="text" id="name" v-model="name" class="form-control" />
                        </div>
                    </label>

                    <label for="surname" class="col-xs-12">
                        <span class="col-xs-4">Surname:</span>
                        <div class="col-xs-8">
                            <input type="text" id="surname" v-model="surname" class="form-control" />
                        </div>
                    </label>

                    <label for="fullname" class="col-xs-12">
                        <span class="col-xs-4" title="Suggestion based on name and surname">Fullname (?):</span>
                        <div class="col-xs-8">
                            <control-full-name id="fullname" v-model="computedFullname"></control-full-name>
                        </div>
                    </label>

                    <label for="email" class="col-xs-12">
                        <span class="col-xs-4" title="Suggestion based on name and surname">Email (?):</span>
                        <div class="col-xs-8">
                            <input
                                    type="text"
                                    id="email"
                                    :value="email"
                                    class="form-control"
                                    @focusin="onEmailFocus"
                                    @change="onEmailChange"
                                    autocomplete="email"
                            />
                        </div>
                    </label>

                    <label for="password" :class="['col-xs-12', { 'has-error': error.password }]">
                        <span class="col-xs-4">Password:</span>
                        <div class="col-xs-8">
                            <input
                                    type="password"
                                    id="password"
                                    v-model="password"
                                    class="form-control"
                                    @focusout="touched.password = true"
                                    autocomplete="new-password"
                            />
                        </div>
                        <span v-show="error.password"
                              class="col-xs-12 text-danger">Should be 8+ characters length</span>
                    </label>

                    <label for="repeatPassword" class="col-xs-12" :class="{ 'has-error': error.repeatPassword }">
                        <span class="col-xs-4">Repeat password:</span>
                        <div class="col-xs-8">
                            <input
                                    type="password"
                                    id="repeatPassword"
                                    v-model="repeatPassword"
                                    class="form-control"
                                    autocomplete="new-password"
                            />
                        </div>
                        <span v-show="error.repeatPassword" class="col-xs-12 text-danger">Should match password</span>
                    </label>

                    <label for="storeData" class="col-xs-12">
                        <span class="col-xs-4">Store data?</span>
                        <div class="col-xs-8">
                            <input type="checkbox" id="storeData" v-model="storeData" class="form-control" />
                        </div>
                    </label>

                    <button v-show="!formSubmitted" type="submit" @click.prevent.stop="formSubmitted = true">Submit
                    </button>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <button v-show="formSubmitted" type="button" @click="formSubmitted = false">Back to form</button>
        <hr>
        <div class="row" v-show="formSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullname}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import ControlFullName from './ControlFullName.vue';

  export default {
    data() {
      return {
        formSubmitted: false,
        name: '',
        surname: '',
        fullname: '',
        hostname: '',
        password: '',
        repeatPassword: '',
        touched: {
          password: false,
        },
        storeData: false,
      };
    },
    components: {
      'control-full-name': ControlFullName,
    },
    computed: {
      computedFullname: {
        get() {
          return this.fullname || (this.name + ' ' + this.surname);
        },
        set(fullname) {
          this.fullname = fullname;
        },
      },
      email() {
        return `${this.name}.${this.surname}@${this.hostname}`.toLowerCase();
      },
      errorPassword() {
        return this.password.length < 8;
      },
      errorRepeatPassword() {
        return this.repeatPassword !== this.password;
      },
      error() {
        return {
          password: this.touched.password && this.errorPassword,
          repeatPassword: this.touched.password && this.errorRepeatPassword,
        };
      },
    },
    methods: {
      onEmailFocus(event) {
        const emailBeforeHostLength = this.email.indexOf('@') + 1;
        event.target.setSelectionRange(emailBeforeHostLength, 1000);
      },
      onEmailChange(event) {
        const email = event.target.value;
        const hostname = email.slice(email.indexOf('@') + 1);
        this.hostname = hostname;
      },
      updateFullName(name, surname) {
        this.fullname = name + ' ' + surname;
      },
    },
    watch: {
      name(newName, oldName) {
        this.updateFullName(newName, this.surname);
      },
      surname(newSurname, oldSurname) {
        this.updateFullName(this.name, newSurname);
      },
    },
  };
</script>

<style>
</style>
