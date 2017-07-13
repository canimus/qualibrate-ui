<div class="navbar-item context-menu is-pulled-right"
     :class="{'is-active': isMenuOpened}">

    <a v-on-clickaway="away" @click="isMenuOpened = !isMenuOpened">
        <i class="fa fa-ellipsis-v"></i>
    </a>

    <div class="navbar-dropdown">
        <a class="navbar-item">
            <span class="icon"><i class="fa fa-dot-circle-o"></i></span> Record Step
        </a>
        <a class="navbar-item">
            <span class="icon"><i class="fa fa-trash"></i></span> Delete Step
        </a>
        <a class="navbar-item">
            <span class="icon"><i class="fa fa-copy"></i></span> Duplicate Step
        </a>
    </div>
</div>