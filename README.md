# Video Catalog App

A Video GameCard Aggregator application to illustrate using Laravel to pull data from the IGDB API and display game
information, coming soon,
videos, and screenshots.

Exploring frontend features:

1. HTTP client
2. Tailwind CSS
3. Livewire
4. Alpine.js

---

![homepage_screenshot.png](public/assets/images/homepage_screenshot.png)

Backend Framework:

- **Laravel v10.40.0 (PHP v8.3.1):** https://laravel.com/docs/10.x/installation#docker-installation-using-sail
  with Breeze, Inertia, React, and PHP Unit testing scaffolding

Frontend Framework:

- **React v8.2.0:** https://react.dev/
- Node v20.11.0
- Npm v10.3.0

Frontend installed packages:

- ProgressBar.js (responsive and slick progress bars with animated SVG
  paths): https://kimmobrunfeldt.github.io/progressbar.js/
- Lodash Debounce: https://dmitripavlutin.com/react-throttle-debounce/

Tailwind features:

- Tailwind CSS Spinner - Flowbite (spinner component as a loader
  indicator): https://flowbite.com/docs/components/spinner/

Note:

- Docker/Sail is installed: https://laravel.com/docs/10.x#docker-installation-using-sail
- Using IGDB API (Twitch endpoint to get game data): https://api-docs.igdb.com/#getting-started
- Using Heroicons (hand-crafted icons by makers of Tailwind): https://heroicons.com/
- Fluid Width Video (tips and tricks): https://css-tricks.com/fluid-width-video/
- Laravel Cache (speed-up loading games): https://laravel.com/docs/10.x/cache

## Local Dev Installation

Clone the repo locally:

```sh
git clone https://github.com/wayjay4/video_game_info_app.git video_game_info_app
```

Go into video_game_info_app dir:

```sh
cd video_game_info_app
```

Install PHP dependencies (composer v2.6.6):

```sh
composer install
```

Install NPM dependencies (node v20.11.0, npm v10.3.0):

**Node**

```sh
nvm install 20.11.0
```

```sh
nvm use 20.11.0
```

- https://stackoverflow.com/questions/7718313/how-to-change-to-an-older-version-of-node-js

**Npm**

```sh
npm install npm@10.3.0 -g
```

- https://stackoverflow.com/questions/9755841/how-can-i-change-the-version-of-npm-using-nvm

Build assets:

```sh
npm install
```

```sh
npm run dev
```

Two options to serve the Application

- 1.) using php artisan serve and local database (see instructions below)
- 2.) using docker service container (see instructions below)

---

### 1.) Serve application with php artisan and local database

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create a local MySql database. You can also use another database (SQLite, Postgres), simply update your configuration
accordingly.

- open .env file and change db settings as needed
- make database as needed

Run database migrations and seeder:

```sh
php artisan migrate:fresh --seed
```

Run the dev server (the output will give the address):

```sh
php artisan serve
```

You're ready to go! Visit App in your browser!

---

### 2.) Serve application with Docker/Sail

Setup configuration:

```sh
cp .env.docker .env
```

Generate application key:

```sh
php artisan key:generate
```

Install Docker

Make sure you have installed and started Docker Desktop Application:

- https://www.docker.com/

Start Docker/Sail:

```sh
./vendor/bin/sail up
```

Configuring A Shell Alias for 'sail' (optional)

- https://laravel.com/docs/10.x/sail#configuring-a-shell-alias

```sh
sail up
```

Run database migrations and seeder for db service container:

```sh
sail artisan migrate:fresh --seed
```

You're ready to go! Visit App in your browser!:

http://localhost/

---

### Configure IGDB API connection

Follow IGDB documentation at https://api-docs.igdb.com/#account-creation to:

- create a Twitch account
- setup an application to get your client_id and client_secret
- obtain an authorization token

Setup app configuration:

- Open .env and add IGDB your client_id and authorization token

```sh
IGDB_CLIENT_ID='client_id_str'
IGDB_AUTHORIZATION='Bearer token_str'
```

- Open config/services.php and add the following:

```sh
'igdb' => [
    'Client-ID' => env('IGDB_CLIENT_ID'),
    'Authorization' => env('IGDB_AUTHORIZATION'),
],
```

- To make an api call use Illuminate\Support\Facades\Http or your preferred package to add authorization data to the
  HTTP query header:

```sh
Http::withHeaders(config('services.igdb'))
```

Example:

```sh
$games = Http::withHeaders(config('services.igdb'))->withBody("
        fields name, cover.*, first_release_date, platforms.abbreviation, total_rating_count, rating, rating_count, slug;
        where platforms = (48,49,130,6) & cover != null;
        sort total_rating_count desc;
        limit 12;
    ", 'text/plain')
    ->post('https://api.igdb.com/v4/games')
    ->json();
```

---

### How to use ProgressBar.js

Note: ProgressBar is included already, this is FYI.

Setup app configuration:

- To make ProgressBar globally usable open resources/js/bootstrap.js and add the following:

```sh
import ProgressBar from "progressbar.js";
window.ProgressBar = ProgressBar;
```

- Then below that add a function that will show a pre-made or custom progress bar, for example:

```sh
window.showProgressBarCircle = function (container, rating) {
    let bar = new ProgressBar.Circle(container, {
        color: 'white',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 3,
        trailColor: '#4A5568',
        easing: 'easeInOut',
        duration: 2500,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#48BB78', width: 6 },
        to: { color: '#48BB78', width: 6 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value+'%');
            }

        }
    });
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(rating / 100);  // Number from 0.0 to 1.0
}
```

More examples can be found at https://kimmobrunfeldt.github.io/progressbar.js

Using show progressbar example:

```sh
useEffect(() => {
    showProgressBarCircle(document.getElementById('member_rating'), 75);
    showProgressBarCircle(document.getElementById('critic_rating'), 89);
}, []);

return (
  <div id="member_rating"></div>
  <div id="critic_rating"></div>
)
```
