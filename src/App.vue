<template>
  <ClientsTable/>
</template>
<script>
import {defineComponent} from "vue";
import ClientsTable from "@/entities/clients/";

export default defineComponent({
  components: {ClientsTable},
  data() {
    return {
      contentButton: 'Button in named slots',
    }
  },
  props: {},
  setup(props, {emit}) {
    const smartphones = [
      {
        brand: "Apple",
        model: "iPhone 16 Pro Max",
        release_year: 2024,
        display: {
          size_inch: 6.9,
          type: "LTPO Super Retina XDR OLED",
          resolution: "1320x2868",
          refresh_rate_hz: 120
        },
        processor: "Apple A18 Pro",
        ram_gb: 8,
        storage_options_gb: [256, 512, 1024],
        camera: {
          main_mp: 48,
          ultrawide_mp: 48,
          telephoto_mp: 12,
          front_mp: 12
        },
        battery_mah: 4685,
        os: "iOS 18",
        price_usd_approx: 1199
      },
      {
        brand: "Samsung",
        model: "Galaxy S24 Ultra",
        release_year: 2024,
        display: {
          size_inch: 6.8,
          type: "Dynamic AMOLED 2X",
          resolution: "1440x3120",
          refresh_rate_hz: 120
        },
        processor: "Qualcomm Snapdragon 8 Gen 3",
        ram_gb: 12,
        storage_options_gb: [256, 512, 1024],
        camera: {
          main_mp: 200,
          ultrawide_mp: 12,
          telephoto_mp: 50,
          periscope_mp: 10,
          front_mp: 12
        },
        battery_mah: 5000,
        os: "Android 14 (One UI 6.1)",
        price_usd_approx: 1299
      },
      {
        brand: "Google",
        model: "Pixel 9 Pro XL",
        release_year: 2024,
        display: {
          size_inch: 6.8,
          type: "LTPO OLED",
          resolution: "1344x2992",
          refresh_rate_hz: 120
        },
        processor: "Google Tensor G4",
        ram_gb: 16,
        storage_options_gb: [128, 256, 512, 1024],
        camera: {
          main_mp: 50,
          ultrawide_mp: 48,
          telephoto_mp: 48,
          front_mp: 42
        },
        battery_mah: 5060,
        os: "Android 15",
        price_usd_approx: 1099
      },
      {
        brand: "Xiaomi",
        model: "14 Ultra",
        release_year: 2024,
        display: {
          size_inch: 6.73,
          type: "LTPO AMOLED",
          resolution: "1440x3200",
          refresh_rate_hz: 120
        },
        processor: "Qualcomm Snapdragon 8 Gen 3",
        ram_gb: 16,
        storage_options_gb: [512, 1024],
        camera: {
          main_mp: 50,
          ultrawide_mp: 50,
          telephoto_mp: 50,
          periscope_mp: 50,
          front_mp: 32
        },
        battery_mah: 5300,
        os: "Android 14 (HyperOS)",
        price_usd_approx: 1100
      },
      {
        brand: "OnePlus",
        model: "12",
        release_year: 2024,
        display: {
          size_inch: 6.82,
          type: "LTPO AMOLED",
          resolution: "1440x3168",
          refresh_rate_hz: 120
        },
        processor: "Qualcomm Snapdragon 8 Gen 3",
        ram_gb: 16,
        storage_options_gb: [256, 512],
        camera: {
          main_mp: 50,
          ultrawide_mp: 48,
          telephoto_mp: 64,
          front_mp: 32
        },
        battery_mah: 5400,
        os: "Android 14 (OxygenOS 14)",
        price_usd_approx: 799
      }
    ];

    return {smartphones};
  },
})
</script>
<style scoped>
  .app {
    &__thead {
      background: purple;
    }

    &__button {
      background: purple;
    }
  }
</style>
