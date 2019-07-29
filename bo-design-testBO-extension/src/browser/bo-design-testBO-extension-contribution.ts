import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const BoDesignTestBOExtensionCommand = {
    id: 'BoDesignTestBOExtension.command',
    label: "Shows a message"
};

@injectable()
export class BoDesignTestBOExtensionCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(BoDesignTestBOExtensionCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class BoDesignTestBOExtensionMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: BoDesignTestBOExtensionCommand.id,
            label: 'Say Hello'
        });
    }
}