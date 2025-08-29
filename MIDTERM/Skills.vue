<template>
  <div class="card mb-4">
    <div class="card-header bg-info text-white">
      Skills
    </div>
    <div class="card-body">
      <h5>Trainings & Seminars</h5>
      <ul>
        <li>FreeCodeCamp</li>
        <li>Simplilearn</li>
      </ul>

      <h5 class="mt-3">Technologies</h5>
      <ul>
        <li>Vue.js, React</li>
        <li>Node.js, Express</li>
        <li>Bootstrap, Bulma</li>
      </ul>

      <h5 class="mt-3">Programming Languages</h5>
      <ul>
        <li>JavaScript, HTML</li>
        <li>Python, Java</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style scoped>
.card {
  margin: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #42b983; /* Greenish color */
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .card-body {
    padding: 15px;
  }

  .card-title {
    font-size: 1.25rem;
  }
}
</style>