import {
    Menu,
    Form,
    Input,
    Table,
    Button,
    Layout,
    Breadcrumb,
} from "ant-design-vue";

export default {
    install( app ) {
        app
            .use( Menu )
            .use( Form )
            .use( Input )
            .use( Table )
            .use( Button )
            .use( Layout )
            .use( Breadcrumb )
        ;
    }
}