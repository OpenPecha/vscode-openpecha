import * as vscode from 'vscode';
import { OpenPecha } from "./openpecha";

export async function activate(context: vscode.ExtensionContext) {

	const op = new OpenPecha();
	context.subscriptions.push(
		vscode.commands.registerCommand(
			"extension.download",
			op.download()
		)
	);
}

// this method is called when your extension is deactivated
export function deactivate() { }
