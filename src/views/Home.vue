<script setup lang="ts">
import ClayCard from "@/components/ClayCard.vue";
console.log("home");
</script>

<template>
  <div class="home">
    <h1 class="title">ike1z's page</h1>
    <div class="message">I love engineering, especially frontend!</div>
    <div class="card-container">
      <ClayCard title="WEB engineering">
        <ul>
          <li>TypeScript, HTML, CSS - Vue.js</li>
          <li>Python - Django</li>
          <li>Ruby - Ruby on Rails</li>
        </ul>
      </ClayCard>
      <ClayCard title="Testing">
        <ul>
          <li>
            Unit test
            <ul>
              <li>Jest, Django test</li>
            </ul>
          </li>
          <li>
            E2E test
            <ul>
              <li>Cypress</li>
            </ul>
          </li>
        </ul>
      </ClayCard>
      <ClayCard title="Infrastructure	">
        <ul>
          <li>
            AWS
            <ul>
              <li>
                Athena, Batch, CloudFront, CloudWatch, EC2, ECR, IAM, Lambda,
                RDS, Route 53, S3, SSM, WAF
              </li>
            </ul>
          </li>
        </ul>
      </ClayCard>
      <ClayCard title="Database">
        <ul>
          <li>MySQL</li>
          <li>AWS Athena - S3</li>
        </ul>
      </ClayCard>
      <ClayCard title="CI">
        <ul>
          <li>GitHub Actions</li>
          <li>Circle CI</li>
        </ul>
      </ClayCard>
      <ClayCard title="Environment">
        <ul>
          <li>Docker</li>
          <li>
            Terraform
            <ul>
              <li>AWS</li>
              <li>GitHub</li>
            </ul>
          </li>
        </ul>
      </ClayCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  color: #222;
}
.title {
  text-align: left;
  padding-left: 30px;
}
.message {
  text-align: left;
  padding-left: 30px;
  font-size: 24px;
  margin-bottom: 20px;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;

  li ul {
    padding-left: 20px;
  }
}
</style>
