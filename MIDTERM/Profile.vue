<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Profile</h5>
      <p><strong>Objective:</strong> To pursue a career in web development.</p>
      <p><strong>Name:</strong> Kyle Lising</p>
      <p><strong>Course:</strong> Bachelor in Science and Information Technology</p>
      <p><strong>Specialization:</strong> Web Development</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
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

.card-text {
  font-size: 1rem;
  color: #333;
}

.card-body p {
  margin-bottom: 10px;
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