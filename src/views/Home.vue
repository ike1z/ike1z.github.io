<template>
  <div class="home">
    <h1 class="title">ike1z's page</h1>
    <div class="message">I love engineering, especially frontend!</div>
    <div class="social">
      <a href="https://github.com/ike1z" target="_blank" rel="noopener noreferrer">
        <img src="/img/github-line.svg" height="30" />
      </a>
      <a href="https://twitter.com/ike1z1" target="_blank" rel="noopener noreferrer">
        <img src="/img/twitter-line.svg" height="30" />
      </a>
      <a href="https://www.linkedin.com/in/kazuki-ikeda-74531b16b/" target="_blank" rel="noopener noreferrer">
        <img src="/img/linkedin-box-line.svg" height="30" />
      </a>
    </div>
    <div class="card-container">
      <ClayCard title="WEB engineering">
        <ul>
          <li>TypeScript, HTML, CSS - Vue.js</li>
          <li>Python - Django</li>
          <li>Ruby - Ruby on Rails</li>
        </ul>
      </ClayCard>
      <ClayCard title="Testing" :delay="300">
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
      <ClayCard title="Infrastructure" :delay="600">
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
      <ClayCard title="Database" :delay="900">
        <ul>
          <li>MySQL</li>
          <li>AWS Athena - S3</li>
        </ul>
      </ClayCard>
      <ClayCard title="CI" :delay="1200">
        <ul>
          <li>GitHub Actions</li>
          <li>Circle CI</li>
        </ul>
      </ClayCard>
      <ClayCard title="Environment" :delay="1500">
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

<script setup lang="ts">
import ClayCard from "@/components/ClayCard.vue";
</script>

<style scoped lang="scss">
.home {
  color: #222;
}

.title {
  text-align: left;
  margin-left: 30px;
}

.message {
  text-align: left;
  margin-left: 30px;
  font-size: 24px;
  margin-bottom: 20px;
}

.social {
  text-align: left;
  margin-left: 30px;

  a {
    padding-right: 10px;
  }
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;

  ul {
    margin: 5px 0
  }

  li ul {
    padding-left: 20px;
  }
}
</style>
