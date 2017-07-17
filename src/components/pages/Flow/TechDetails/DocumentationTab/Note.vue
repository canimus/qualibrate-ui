<template>

    <div class="tile is-ancestor note">

        <div class="tile is-parent">
            <article class="tile is-child box">
                <div class="content">
                    <div class="is-pulled-left">
                        <figure class="image is-48x48">
                            <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                        </figure>
                    </div>
                    <div>
                        <p class="title is-6">{{ note.userName }}</p>
                        <p class="date-time">
                            <span class="icon"><i class="fa fa-calendar"></i></span>
                            {{ note.date | moment("D MMM YYYY") }}
                            <span class="icon"><i class="fa fa-clock-o"></i></span>{{ note.date | moment("h:mm a")
                            }}
                        </p>
                    </div>
                </div>
                <div class="content is-small">
                    {{ note.message}}
                </div>
            </article>
        </div>

    </div>

</template>

<script>

  export default {
    props: ['note']
  }
</script>

<style lang="scss">

    .note {
        .title {
            margin-bottom: 4px !important;
        }
        .date-time {
            font-size: 12px;

            i {
                font-size: 12px;
            }
        }

        figure {
            margin-right: 10px;
        }
    }
</style>
