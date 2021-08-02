import {Injectable, Logger} from "@nestjs/common";

@Injectable()
export default class TestLibraryService {
    private readonly logger: Logger = new Logger('TestLibraryService')

    sayInConsole(message: string): void {
        this.logger.log(message)
    }
}