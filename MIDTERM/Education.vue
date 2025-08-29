<template>
  <div class="card mb-4">
    <div class="card-header bg-success text-white">
      Education
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Elementary:</strong> Sto Rosario Elementary School</li>
        <li class="list-group-item"><strong>JHS/SHS:</strong> Holy Angel University</li>
        <li class="list-group-item"><strong>College:</strong> Holy Angel University</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
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