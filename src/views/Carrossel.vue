<template>
    <div class="carrossel">
      <slot></slot>
      <button @click="prev" class="prev">Prev</button>
      <button @click="next" class="next">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      next() {
        this.$emit('next')
      },

      prev() {
        this.$emit('prev')
      },
    }
  }
  </script>
  
  <style>
    .carrossel {
      position: relative;
      width: 600px;
      height: 350px;
      overflow: hidden;
    }

    button {
      position: absolute;
      height: 40px;
      width: 50px;
      top: calc(50% - 20px);
      border: none;
    }

    button:active, button:hover {
      outline: none;
      cursor: pointer;
    }

    .next {
right: 0;    }

    .prev {
      left: 0;
    }


  </style>

  