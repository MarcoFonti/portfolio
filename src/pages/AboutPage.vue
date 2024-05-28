<!-- JS -->
<script>

import { ExperienceData } from '../assets/data/index.js'

export default {
  name: 'AboutPage',
  data() {
    return {
      ExperienceData,
    }
  }

};

</script>

<!-- HTML -->
<template>
  <div class="container">
    <h1 class="title-experience">ESPERIENZE</h1>
    <div v-for="(experience, index) in ExperienceData" :key="experience.index">
      <div class="containar-line">
        <div class="ball"></div>
        <div class="container-content">
          <div class="line-or"></div>
          <div class="container-full-stack">
            <h3>{{ experience.title }}</h3>
            <address>{{ experience.name }}</address>
            <div class="line"></div>
            <p v-html="experience.content.text"></p>
            <ul class="list">
              <li v-for="(list, index) in experience.content.experiences" :key="list.index">
                <strong>{{ list.titleExperience }}</strong> {{ list.contentExperience }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- CSS -->
<style scoped lang="scss">
.title-experience {
  margin-bottom: 40px;
  margin-top: 120px;
}


.container {
  margin-left: 55px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  padding-right: 400px;
  overflow: auto;
}

.containar-line {
  margin-top: 12px;
  margin-left: 65px;
  position: relative;
}

.ball {
  background-color: rgba(232, 232, 237, 0.37);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -21px;
  left: -9px;
  border: 2px double white;
}

.container-content {
  display: flex;
  gap: 20px;
}

.line-or {
  width: 1px;
  height: 560px;
  background-color: white;
}

.container-full-stack {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  height: 560px;
}

.list {
  margin-left: 30px;
  margin-top: 4px;
}

.line {
  width: 400px;
  height: 1px;
  background-color: white;
  margin-bottom: 4px;
}

ul li:not(:last-child) {
  margin-bottom: 10px;
}

p {
  font-size: 20px;
}

strong, li {
  font-size: 18px;
}

</style>