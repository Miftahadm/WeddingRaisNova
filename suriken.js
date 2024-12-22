<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Animasi Lemparan Suriken</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        /* Styling Suriken */
        .suriken {
            width: 50px;
            height: 50px;
            background-color: silver;
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            position: absolute;
            transition: all 1s ease;
        }

        /* Animasi Terbang */
        @keyframes fly {
            0% {
                transform: translate(0, 0) rotate(0deg);
            }
            50% {
                transform: translate(300px, -200px) rotate(360deg);
            }
            100% {
                transform: translate(600px, 0) rotate(720deg);
            }
        }

        .fly-animation {
            animation: fly 2s linear;
        }

        /* Tombol Lempar */
        .throw-btn {
            position: fixed;
            bottom: 20px;
            padding: 10px 20px;
            background-color: green;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button class="throw-btn">Lempar Suriken</button>

    <script>
        class SurikenLauncher {
            constructor() {
                this.throwButton = document.querySelector('.throw-btn');
                this.setupEventListeners();
            }

            setupEventListeners() {
                this.throwButton.addEventListener('click', () => this.throwSuriken());
            }

            throwSuriken() {
                // Buat elemen suriken
                const suriken = document.createElement('div');
                suriken.classList.add('suriken');

                // Atur posisi awal di tengah layar
                suriken.style.left = '0px';
                suriken.style.top = `${window.innerHeight / 2}px`;

                // Tambahkan ke body
                document.body.appendChild(suriken);

                // Aktifkan animasi dengan sedikit delay
                setTimeout(() => {
                    suriken.classList.add('fly-animation');
                }, 50);

                // Hapus suriken setelah animasi selesai
                suriken.addEventListener('animationend', () => {
                    suriken.remove();
             
                });
            }
        }

        // Inisialisasi launcher
        new SurikenLauncher();
    </script>
</body>
</html>