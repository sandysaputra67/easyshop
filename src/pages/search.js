import { NarrowContainer } from "../layouts/container";
import { Navbar } from "../components/navbar/index";
import { Paper } from "../components/paper";

export let Searchpage = () => <div>
    <Navbar search/>
    <NarrowContainer>
        <Paper>
            Cari produk berkualitas yang cocok banget buat kamu!
        </Paper>
    </NarrowContainer>
</div>