import {
    Menu,
    Button,
    Layout,
    Breadcrumb,
} from "ant-design-vue";

export default {
    install( app ) {
        app
            .use( Menu )
            .use( Button )
            .use( Layout )
            .use( Breadcrumb )
        ;
    }
}