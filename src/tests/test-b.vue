<template>
    <div>
        <h1>Component-B</h1>
        <p>{{ altCardProps.card.w }}</p>
        <input type="text">
    </div>
</template>
<script>
export default {
    updated(){
        console.log('updated b');
    }
}
</script>
