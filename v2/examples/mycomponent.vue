<div id="my-component">
    <ul>
        <li v-for="user in users">
            <span class="firstName">{{ user.firstName }}</span>
            <br>
            <span class="lastName">{{ user.lastName }}</span>
        </li>
    </ul>
</div>