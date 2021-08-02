import {Logger, Module, OnModuleInit} from "@nestjs/common";
import TestLibraryService from "./test-library.service";

@Module({
    providers: [TestLibraryService],
    exports: [TestLibraryService]
})
export default class TestLibraryModule implements OnModuleInit {
    private readonly logger: Logger = new Logger('TestLibraryModule')

    public async onModuleInit() {
        this.logger.log("Module init")
    }
}